import buildings from "../table";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
import { DataGrid, 
    GridRowsProp, 
    GridColDef, 
    GridToolbar,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,  
} from "@mui/x-data-grid";

function BuildingsGrid() {

    const rows: GridRowsProp = buildings;

    const columns: GridColDef[] = [
        { field: 'Название', headerName: 'Название'},
        { field: 'Тип'},
        { field: 'Страна'},
        { field: 'Город',},
        { field: 'Год' },
        { field: 'Высота'},
    ];   

    function CustomToolbar() {
        return (
          <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <Box sx={{ flexGrow: 1 }} />
            <GridToolbarExport/>
          </GridToolbarContainer>
        );
    } 

    return (

        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
        <DataGrid 
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows} 
        columns={columns}  
                    
        slots={{
            toolbar: GridToolbar,
        }}

        slotProps={{ 
            pagination: { 
                rowsPerPageOptions: [ 10, 20, 30, 100 ],
            }
        }}
        />
        </Container> 
  );
}

 export default BuildingsGrid;
import movies from "../table";
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
import {useState, 
    useEffect} from 'react';

interface Movie{
    id: number;
    title: string;
    rating: number;
    year: string;
}

interface ApiResponse{
    movies: Movie[];
    
}

interface Answer{
    _embedded: ApiResponse;
}

function MoviesGrid() {

    const [rows, setRows] = useState<GridRowsProp>([]);

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Название'},
        { field: 'year', headerName: 'Год' },
        { field: 'rating', headerName: 'Рейтинг'},
        { field: 'id', headerName: 'id'}
    ];   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/structures/api/v1/movies');
                console.log(response);
                const data: Answer = await response.json();
                setRows(data._embedded.movies);
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
            }
        };

        fetchData();
    }, []);



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

 export default MoviesGrid;
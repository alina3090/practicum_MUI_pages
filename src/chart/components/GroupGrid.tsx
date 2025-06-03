import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tGroup } from '../groupdata';

const columns: GridColDef[] = [
    { field: 'Группа', headerName: 'Группа', width: 150 },
    { field: 'Минимальный рейтинг', headerName: 'Минимальный рейтинг', width: 180, type: 'number' },
    { field: 'Максимальный рейтинг', headerName: 'Максимальный рейтинг', width: 180, type: 'number' },
    { field: 'Средний рейтинг', headerName: 'Средний рейтинг', width: 180, type: 'number' },
];


type GroupProps = {
    data: tGroup;
};

export default function GroupGrid({ data }: GroupProps) {
    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row.Группа}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
            />
        </div>
    );
}
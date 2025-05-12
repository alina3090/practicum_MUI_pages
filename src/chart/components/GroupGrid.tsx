import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tGroup } from '../groupdata';

const columns: GridColDef[] = [
    { field: 'Группа', headerName: 'Группа', width: 150 },
    { field: 'Минимальная высота', headerName: 'Минимальная высота', width: 180, type: 'number' },
    { field: 'Максимальная высота', headerName: 'Максимальная высота', width: 180, type: 'number' },
    { field: 'Средняя высота', headerName: 'Средняя высота', width: 180, type: 'number' },
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
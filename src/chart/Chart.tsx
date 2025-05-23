import { Box, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Navbar from '../components/Navbar';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';
import { years } from './groupdata';
import React from 'react';

type GroupByOption = 'Год' ;

export default function Chart() {
    const [group, setGroup] = React.useState<GroupByOption>('Год');
    const [groupData, setGroupData] = React.useState(years);

    const handleChange = (event: SelectChangeEvent<GroupByOption>) => {
        const value = event.target.value as GroupByOption;
        setGroup(value);
        
        switch(value) {
            case 'Год':
                setGroupData(years);
                break;

            default:
                setGroupData(years);
        }
    };

    return (
        <>
            <Navbar active="3" />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Box sx={{ width: 200, mb: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel>Группировать по</InputLabel>
                        <Select
                            id="select-group"
                            value={group}
                            label="Группировать по"
                            onChange={handleChange}
                        >
                            <MenuItem value="Год">Году</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                
                {/* Добавляем компонент диаграммы перед таблицей */}
                <GroupChart data={groupData} />
                <GroupGrid data={groupData} />
            </Container>
        </>
    );
}
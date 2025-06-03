import { Box, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Navbar from '../components/Navbar';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';
import { tGroup } from './groupdata';
import React from 'react';

type GroupByOption = 'Год' ;

const fufel: Record<GroupByOption, string>={'Год': 'http://127.0.0.1:5000/stats/year'};

export default function Chart() {
    const [group, setGroup] = React.useState<GroupByOption>('Год');
    const [groupData, setGroupData] = React.useState<tGroup>([]);


    const fetchGroupData = async (selectedGroup: GroupByOption) => {
        try {
            const response = await fetch(fufel[selectedGroup]);
            if (response.ok) {
                const data = await response.json();
                setGroupData(data.stats);
            }
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };

     React.useEffect(() => {
        fetchGroupData(group);
    }, [group]);

    
    const handleChange = (event: SelectChangeEvent) => {
        const selectedGroup = event.target.value as GroupByOption;
        setGroup(selectedGroup);
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
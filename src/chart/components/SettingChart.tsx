import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import React from 'react';


type SeriesState = {
    'Максимальный рейтинг': boolean;
    'Средний рейтинг': boolean;
    'Минимальный рейтинг': boolean;
};

type SettingChartProps = {
    series: SeriesState;
    setSeries: React.Dispatch<React.SetStateAction<SeriesState>>;
    isBar: boolean;
    setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SettingChart({ 
    series, 
    setSeries,
    isBar,
    setIsBar 
}: SettingChartProps) {
    const handleSeriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked,
        });
    };

    const handleChartTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(event.target.value === 'bar');
    };

    return (
        <Stack
            direction="row"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ m: "20px 0" }}
        >
            <FormControl component="fieldset">
                <FormLabel component="legend">Тип диаграммы:</FormLabel>
                <RadioGroup
                    name="chart-type-group"
                    value={isBar ? "bar" : "line"}
                    onChange={handleChartTypeChange}
                >
                    <FormControlLabel 
                        value="bar" 
                        control={<Radio />}
                        label="Гистограмма"
                    />
                    <FormControlLabel 
                        value="line" 
                        control={<Radio />}
                        label="Линейная"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">На диаграмме показать:</FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series['Максимальный рейтинг']}
                            onChange={handleSeriesChange}
                            name="Максимальный рейтинг"
                        />
                    }
                    label="Максимальный рейтинг"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series['Средний рейтинг']}
                            onChange={handleSeriesChange}
                            name="Средний рейтинг"
                        />
                    }
                    label="Средний рейтинг"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series['Минимальный рейтинг']}
                            onChange={handleSeriesChange}
                            name="Минимальный рейтинг"
                        />
                    }
                    label="Минимальный рейтинг"
                />
            </FormControl>
        </Stack>
    );
}
import React, { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import api from '../../axios';

// const createData = (response) => {
//     return response.map((value, index) => { index, value.score });
//   }

// const scores = `https://localhost:9000/users/score/5f94996c6b492e9d904d4ccc`;
// const getScores = () => {
//     api.get('/users/score/5f94996c6b492e9d904d4ccc')
//         .then(response => {
//             console.log(response);
//             // createData(response);
//             return response.map((value, index) => { index, value.score });
//         })
    // fetch(scores)
    //   .then((res) => res.json())
    //   .then((data) => {
    //       console.log(data);
    //     // data.map((value, index) => { index, value.score })
    //     return data;
    //   });

// }

// const data = [
//     {index: 1, data: 12},
//     {index: 2, data: 13},
//     {index: 3, data: 14}
//   ];
  

const Trend = () => {
    const theme = useTheme();
    const [data, setData] = React.useState([])

    // function createData(index, value) {
    //     return {index, value}
    // }

    const getScores = async () => {
        await api.get('/users/score/5f94996c6b492e9d904d4ccc')
            .then((response) => {
                // console.log(response.data.data);
                // createData(response.data.date);
                setData(response.data.data.map((value, index) => ({ index: index, score: value.score })));
                // setData(indexValue);
                // setData(indexValue.map((item) => createData(item.index, item.score)));
            })
        }

    useEffect(() => {
        getScores();
    }, [])

    return (
    <React.Fragment>
        <h2>Your Mood Score Trend</h2>
        <ResponsiveContainer>
        <LineChart
            data={data}
        >
            <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary}>
            <Label
                angle={270}
                position="left"
                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
                Score
            </Label>
            </YAxis>
            <Line type="monotone" dataKey="score" isAnimationActive={true} stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
        </ResponsiveContainer>
    </React.Fragment>
    );
 
  }

export default Trend;

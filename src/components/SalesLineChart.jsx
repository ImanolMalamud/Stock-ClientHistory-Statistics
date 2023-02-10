import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { name: "Jan", ProductA: 4000, ProductB: 2400, ProductC: 2400 },
    { name: "Feb", ProductA: 3000, ProductB: 1398, ProductC: 2210 },
    { name: "Mar", ProductA: 2000, ProductB: 9800, ProductC: 2290 },
    { name: "Apr", ProductA: 2780, ProductB: 3908, ProductC: 2000 },
    { name: "May", ProductA: 1890, ProductB: 4800, ProductC: 2181 },
    { name: "Jun", ProductA: 2390, ProductB: 3800, ProductC: 2500 },
    { name: "Jul", ProductA: 3490, ProductB: 4300, ProductC: 2100 },
];

const SalesLineChart = () => {
    const [selectedProducts, setSelectedProducts] = useState(["ProductA", "ProductB", "ProductC"]);

    const handleLineClick = (dataKey) => {
        if (selectedProducts.includes(dataKey)) {
            setSelectedProducts(selectedProducts.filter((product) => product !== dataKey));
        } else {
            setSelectedProducts([...selectedProducts, dataKey]);
        }
    };

    return (
        <LineChart
            width={1000}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend align="right" verticalAlign="top" height={36} />

            {["ProductA", "ProductB", "ProductC"].map((dataKey) => (
                <Line
                    key={dataKey}
                    type="monotone"
                    dataKey={dataKey}
                    stroke={
                        dataKey === "ProductA"
                            ? "#8884d8"
                            : dataKey === "ProductB"
                                ? "#82ca9d"
                                : "#ffc658"
                    }
                    onClick={() => handleLineClick(dataKey)}
                    activeDot={{ r: 8 }}
                    strokeOpacity={selectedProducts.includes(dataKey) ? 1 : 0}
                />
            ))}
        </LineChart>
    );
};

export default SalesLineChart;

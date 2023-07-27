import React, { useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import { useStore } from "../App";

interface iChart {
  gender: {
    type: string;
    value: number;
  }[];
}

const Chart = () => {
  const [data, setData] = useState<iChart["gender"]>([]);
  const { people } = useStore();

  useEffect(() => {
    if (people) {
      const _female = people.filter((x) => x.gender === "female").map((x) => x.gender).length;
      const _male = people.filter((x) => x.gender === "male").map((x) => x.gender).length;
      setData([
        { type: "female", value: _female },
        { type: "male", value: _male },
      ]);
    }
  }, [people]);

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return data && <Pie {...config} />;
};

export default Chart;

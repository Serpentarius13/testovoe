import { FC, useEffect, useState } from "react";
import "./App.css";

interface Param {
  id: number;
  name: string;
  type: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

const obj = {
  name: "name",
  value: "value",
};

interface FormState {
  name: string;
  value: string;
  id: number;
  type: string;
}

const App: FC<Props> = ({ params, model: { paramValues } }) => {
  const [formState, setFormState] = useState<FormState[]>(
    params.map((param) => {
      const foundValue = paramValues.find(
        (el) => el.paramId === param.id
      )?.value;

      const value = foundValue || "";

      const name = param.name;
      const id = param.id;
      const type = param.type;
      return { name, value, id, type };
    })
  );

  console.log(formState, 'FORM STATe');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let tobeChanged = formState.find((el) => el.name === name);
    if (tobeChanged) tobeChanged.value = value || "";
    setFormState([...formState]);
  };

  const getModel = () => {
    const model: Model = {
      paramValues: formState.map((el) => {
        return { paramId: el.id, value: el.value };
      }),
    };
    const params: Param[] = formState.map((el) => {
      return { id: el.id, name: el.name, type: el.type };
    });

    return { model, params };
  };

  useEffect(() => {
    console.log(getModel(), 'MODEL RETURN');
  }, [formState]);

  return (
    <>
      {" "}
      {formState.map((el) => {
        return (
          <div key={el.id}>
            <label> {el.name} </label>
            <input
              type={el.type}
              name={el.name}
              onChange={handleChange}
              value={el.value}
            />
          </div>
        );
      })}{" "}
    </>
  );
};
1;

export default App;

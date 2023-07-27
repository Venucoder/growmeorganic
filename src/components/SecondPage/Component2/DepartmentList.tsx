import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import departmentData from './departmentData';

export default function IndeterminateCheckbox() {
  const [checkedParents, setCheckedParents] = React.useState<boolean[]>([]);
  const [checkedChildren, setCheckedChildren] = React.useState<boolean[][]>(
    departmentData.map((department) =>
      Array(department.subDepartments.length).fill(false)
    )
  );

  const handleParentChange =
    (parentIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckedParents = [...checkedParents];
      newCheckedParents[parentIndex] = event.target.checked;
      setCheckedParents(newCheckedParents);

      const newCheckedChildren = checkedChildren.map((childArray, index) =>
        index === parentIndex
          ? childArray.map(() => event.target.checked)
          : childArray
      );
      setCheckedChildren(newCheckedChildren);
    };

  const handleChildChange =
    (parentIndex: number, childIndex: number) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckedChildren = checkedChildren.map((childArray, index) =>
        index === parentIndex
          ? [
              ...childArray.slice(0, childIndex),
              event.target.checked,
              ...childArray.slice(childIndex + 1),
            ]
          : childArray
      );
      setCheckedChildren(newCheckedChildren);

      const allChildrenChecked = newCheckedChildren[parentIndex].every(
        (checked) => checked
      );
      const newCheckedParents = [...checkedParents];
      newCheckedParents[parentIndex] = allChildrenChecked;
      setCheckedParents(newCheckedParents);
    };

  return (
    <div className="dept-list">
      {departmentData.map((department, parentIndex) => (
        <div key={department.id}>
          <FormControlLabel
            label={department.name}
            control={
              <Checkbox
                checked={checkedParents[parentIndex] || false}
                indeterminate={
                  checkedChildren[parentIndex].some((checked) => checked) &&
                  !checkedChildren[parentIndex].every((checked) => checked)
                }
                onChange={handleParentChange(parentIndex)}
              />
            }
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {department.subDepartments.map((subDep, subIndex) => (
              <FormControlLabel
                key={subIndex}
                label={subDep}
                control={
                  <Checkbox
                    checked={checkedChildren[parentIndex][subIndex]}
                    onChange={handleChildChange(parentIndex, subIndex)}
                  />
                }
              />
            ))}
          </Box>
        </div>
      ))}
    </div>
  );
}

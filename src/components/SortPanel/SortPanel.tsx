import { useId, useState } from "react";
import { Label, Select, Wrapper } from "./SortPanel.styled";

export default function SortPanel() {
  const selectId = useId();
  const [sort, setSort] = useState<any>(null);
  return (
    <Wrapper>
      <Label htmlFor={selectId}>Sort</Label>
      <Select
        id={selectId}
        value={sort}
        onChange={(evt: any) => setSort(evt.target.value)}
      >
        <option value="rating">For rating</option>
        <option value="price">For price</option>
      </Select>
    </Wrapper>
  );
}

import { useId } from "react";
import { Label, Select, Wrapper } from "./SortPanel.styled";

interface SoftPanelProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortPanel({ value, onChange }: SoftPanelProps) {
  const selectId = useId();

  return (
    <Wrapper>
      <Label htmlFor={selectId}>Sort</Label>
      <Select
        id={selectId}
        value={value}
        onChange={(evt: any) => onChange(evt.target.value)}
      >
        <option value="">-- Choose --</option>
        <option value="rating">For rating</option>
        <option value="price">For price</option>
      </Select>
    </Wrapper>
  );
}

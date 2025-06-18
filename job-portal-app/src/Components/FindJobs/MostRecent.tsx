import { useState } from "react";
import { Button, Combobox, useCombobox, Text, Box } from "@mantine/core";
import { AlignJustify } from "lucide-react";

const groceries = [
  "Revelence",
  "Most Recent",
  "Salary (Low to High)",
  "Salary (High to Low)",
];

const MostRecent = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Relevence");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={250}
      position="bottom-start"
      withArrow
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div className=" flex rounded-xl p-1.5 gap-1.5 items-center border border-[#ffbd20]">
          {selectedItem}
          <AlignJustify
            onClick={() => combobox.toggleDropdown()}
            className="h-5 w-5 "
            color="#ffbd20"
          />
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
export default MostRecent;

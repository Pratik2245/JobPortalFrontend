import { useState } from "react";
import { Combobox, useCombobox } from "@mantine/core";
import { AlignJustify } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateSort } from "../../Slices/SortSlice";

const jobSortOptions = [
  "Relevance",
  "Most Recent",
  "Salary (Low to High)",
  "Salary (High to Low)",
];

const talentSortOptions = [
  "Relevance",
  "Experience (Low to High)",
  "Experience (High to Low)",
];

const MostRecent = ({ sortType }: { sortType: "job" | "talent" }) => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState<string>("Relevance");

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  // choose which set of options to render
  const optionsList = sortType === "job" ? jobSortOptions : talentSortOptions;

  const options = optionsList.map((item) => (
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
        dispatch(updateSort(val));
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div className="flex rounded-xl p-1.5 gap-1.5 items-center border border-[#ffbd20]">
          {selectedItem}
          <AlignJustify
            onClick={() => combobox.toggleDropdown()}
            className="h-5 w-5"
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


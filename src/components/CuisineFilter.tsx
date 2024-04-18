import { cuisinesList } from "@/config/restaurant-options-config";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisine: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandClick: () => void;
};

const CuisineFilter = ({
  onChange,
  isExpanded,
  onExpandClick,
  selectedCuisines,
}: Props) => {
  const handleCusinesReset = () => {
    onChange([]);
  };

  const handleCuisineChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCusineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);
    onChange(newCusineList);
  };
  return (
    <>
      <div className="flex items-center justify-between px-2">
        <div className="text-md font-semibold mb-2">Filter by cuisine</div>
        <div
          onClick={handleCusinesReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {cuisinesList
          .slice(0, isExpanded ? cuisinesList.length : 7)
          .map((cuisine) => {
            // checking for current cuisine is in the selectedCuisines or not
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div key={cuisine} className="flex">
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisineChange}
                />
                <label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center rounded-full text-sm font-semibold cursor-pointer px-2 py-2 ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </label>
              </div>
            );
          })}

        <Button
          variant={"link"}
          type="button"
          onClick={onExpandClick}
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex items-center">
              View less <ChevronUp />
            </span>
          ) : (
            <span className="flex items-center">
              View more <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;

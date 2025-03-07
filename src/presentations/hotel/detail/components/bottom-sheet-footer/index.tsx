import { Button } from "@components";
import { FC } from "react";

interface BottomSheetFooter {
  onCancelClick?: VoidFunction;
  onSubmitClick?: VoidFunction;
}

const BottomSheetFooter: FC<BottomSheetFooter> = ({
  onCancelClick,
  onSubmitClick,
}) => (
  <div className="flex flex-ro justify-between items-center gap-2">
    <Button onClick={() => onCancelClick?.()} mode="tertiary" label="Back" />
    <Button onClick={() => onSubmitClick?.()} label="Book Now" />
  </div>
);

export default BottomSheetFooter;

import type { FC, ReactNode } from "react";
import { BottomSheet as SpringBottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import {
  SnapPointProps,
  SpringEvent,
  defaultSnapProps as DefaultSnapProps,
} from "react-spring-bottom-sheet/dist/types";
import styles from "./styles.module.scss";
import { composeClassNames } from "@utils";

export interface BottomSheetProps {
  isExpandOnContentDrag?: boolean;
  hasInitialTransition?: boolean;
  isShowTopHandler?: boolean;
  isScrollLocking?: boolean;
  onDismiss?: VoidFunction;
  children: ReactNode;
  isBlocking?: boolean;
  className?: string;
  maxHeight?: number;
  footer?: ReactNode;
  isOpen: boolean;
  title?: string;
  snapPoints?: (state: SnapPointProps) => number | number[];
  onSwipeAnimationCancel?: (event: SpringEvent) => void;
  onSwipeAnimationStart?: (event: SpringEvent) => void;
  onSwipeAnimationEnd?: (event: SpringEvent) => void;
  defaultSnap?: (state: DefaultSnapProps) => number;
}

const BottomSheet: FC<BottomSheetProps> = ({
  isExpandOnContentDrag = false,
  hasInitialTransition = true,
  isShowTopHandler = true,
  isBlocking = false,
  defaultSnap,
  snapPoints,
  className,
  onDismiss,
  maxHeight,
  children,
  isOpen,
  footer,
  onSwipeAnimationCancel,
  onSwipeAnimationStart,
  onSwipeAnimationEnd,
}) => {
  const bottomSheetClassNames = composeClassNames([
    !isShowTopHandler && styles.noHeader,
    className,
  ]);

  const handleOnDismiss = () => {
    if (!isBlocking) onDismiss?.();
  };

  return (
    <SpringBottomSheet
      skipInitialTransition={!hasInitialTransition}
      expandOnContentDrag={isExpandOnContentDrag}
      onSpringEnd={onSwipeAnimationEnd}
      className={bottomSheetClassNames}
      defaultSnap={defaultSnap}
      snapPoints={snapPoints}
      maxHeight={maxHeight}
      scrollLocking={true}
      footer={footer}
      open={isOpen}
      onSpringCancel={onSwipeAnimationCancel}
      onSpringStart={onSwipeAnimationStart}
      onDismiss={handleOnDismiss}
    >
      <div className="content px-8">{children}</div>
    </SpringBottomSheet>
  );
};

export default BottomSheet;

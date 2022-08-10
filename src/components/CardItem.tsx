import {DataType} from "../types";
import {DragEvent} from "react";

type CardItemProps = {
  data: DataType
  handleDragging: (dragging: boolean) => void
};

export const CardItem = ({data, handleDragging}: CardItemProps) => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      className={"card-container"}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{data.content}</p>
    </div>
  );
};

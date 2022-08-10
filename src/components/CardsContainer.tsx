import {DataType, StatusType} from "../types";
import {CardItem} from "./CardItem";
import {DragEvent} from "react";

type CardsContainerProps = {
  status: StatusType
  items: DataType[]
  isDragging: boolean
  handleDragging: (dragging: boolean) => void
  handleListUpdate: (id: number, status: StatusType) => void
};

export const CardsContainer = (
  {
    status,
    items = [],
    isDragging,
    handleDragging,
    handleListUpdate,
  }: CardsContainerProps
) => {
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedElementId = +e.dataTransfer.getData("text");
    handleListUpdate(draggedElementId, status);
    handleDragging(false);
  };

  return (
    <div
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{status}</p>
      {
        items.map(item => (
          status === item.status &&
          <CardItem
            key={item.id}
            data={item}
            handleDragging={handleDragging}
          />
        ))
      }
    </div>
  );
};

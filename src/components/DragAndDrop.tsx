import {DataType, StatusType} from "../types";
import {CardsContainer} from "./CardsContainer";
import {data} from "../assets";
import {useState} from "react";

const heroTypes: StatusType[] = ["user", "mentor"];

export const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [itemsList, setItemsList] = useState<DataType[]>(data);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);
  const handleListUpdate = (id: number, status: StatusType) => {
    setItemsList(itemsList.map(item => item.id === id && item.status !== status ?
      {...item, status}
      : item
    ));
  };

  return (
    <div className={"cards-container"}>
      {
        heroTypes.map(container => (
          <CardsContainer
            key={container}
            status={container}
            items={itemsList}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleListUpdate={handleListUpdate}
          />
        ))
      }
    </div>
  );
};

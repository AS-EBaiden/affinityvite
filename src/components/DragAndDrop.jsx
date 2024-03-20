import React, { useState, useCallback } from "react";
import { CSS } from "@dnd-kit/utilities";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

const Item = React.forwardRef(
  ({ id, withOpacity, isDragging, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",
      cursor: isDragging ? "grabbing" : "grab",
      display: "flex",
      justifyContent: "center",
      //   alignItems: "center",
      border: isDragging ? "1px dashed red" : "1px solid red",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      backgroundColor: "white",

      ...style,
    };

    const Component = props.children?.type || "div";
    return (
      <Component style={inlineStyles} ref={ref} {...props}>
        {props.children?.props?.children}
      </Component>
    );
  }
);

const SortableItem = (props) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <Item
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    >
      {props.children}
    </Item>
  );
};

const Grid = ({ children, columns }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        // maxWidth: "800px",
        // margin: "100px auto",
        margin: "2rem",
        // display: "flex",
        // flexWrap: "wrap",
        // justifyContent: "space-between",
        // gap: 10,
        // // maxWidth: "800px",
        // margin: "100px auto",
      }}
    >
      {children}
    </div>
  );
};

export const DragDrop = ({ children }) => {
  const [items, setItems] = useState(
    React.Children.map(children, (child, index) => index.toString())
  );
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={2}>
          {items.map((id) => (
            <SortableItem key={id} id={id}>
              {React.cloneElement(
                React.Children.toArray(children)[parseInt(id)]
              )}
            </SortableItem>
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {activeId ? (
          <Item id={activeId} isDragging>
            {React.Children.toArray(children)[parseInt(activeId)]}
          </Item>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

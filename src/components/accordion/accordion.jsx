import React from "react";
import { BaseAccordion } from "./base-accordion";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  // preventClose,
  combineReducers,
} from "./shared";

export default function Accordion({ items, ...props }) {
  const openIcon = <FaMinus />;
  const closeIcon = <FaPlus />;
  return (
    <BaseAccordion stateReducer={combineReducers(single)} {...props}>
      {({ openIndexes, handleItemClick }) => (
        <>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <span>
                  {openIndexes.includes(index) ? openIcon : closeIcon}
                </span>
                <div style={{ fontFamily: "'Baloo Tamma 2'" }}>
                  {item.title}
                </div>
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                <span style={{ fontFamily: "'Baloo Tamma 2'" }}>
                  {item.contents}
                </span>
              </AccordionContents>
            </AccordionItem>
          ))}
        </>
      )}
    </BaseAccordion>
  );
}

import React, { FC } from "react";
import { CheckableTag } from "../common/tag";

const Tags: FC<Props> = ({ setSelectedTags, selectedTags, tags }) => {
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="grid w-full grid-flow-col grid-rows-2 gap-3">
      {tags.map((tag, index) => (
        <CheckableTag
          key={index}
          className="flex h-[33px] items-center justify-center rounded-[12px] border-stroke3 px-[12px]"
          checked={selectedTags.includes(tag.label)}
          onCheckChange={(checked) => handleChange(tag.label, checked)}
        >
          <div className="text-sm font-normal text-gray8">{tag.label}</div>
        </CheckableTag>
      ))}
    </div>
  );
};

export default Tags;

type Props = {
  selectedTags: string[];
  setSelectedTags: (value: string[]) => void;
  tags: { label: string }[];
};

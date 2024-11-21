// TooltipWithIcon.tsx
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

type TooltipWithIconProps = {
  content: string;
  linkurl: string,
  svgIcon: JSX.Element; // Accepts a JSX element (the SVG)
};

const TooltipWithIcon = ({ content, linkurl, svgIcon }: TooltipWithIconProps) => {
  return (
    <li className="bg-gray-200 rounded-full flex items-center justify-center p-2.5 border-2 border-transparent hover:border-gray-600 hover:bg-gray-300 cursor-pointer box-border">
      <Tooltip
        showArrow={true}
        content={content}
        placement="right"
        color="primary"
        offset={26}
        className="pl-3 text-white rounded border-black"
      >
        <Link href={linkurl}>
          <i className="text-[#535165]">{svgIcon}</i>
        </Link>
      </Tooltip>
    </li>
  );
};

export default TooltipWithIcon;

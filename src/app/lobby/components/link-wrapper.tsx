import React from "react";

const LinkWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="pt-28 flex flex-col items-end space-y-4 [&>*]:duration-300
         [&>*]:w-[75%] hover:[&>*]:w-[80%] [&>*]:h-32 [&>*]:rounded-l [&>*]:border-r-0 [&>*]:flex [&>*]:items-end"
    >
      {children}
    </div>
  );
};

export default LinkWrapper;

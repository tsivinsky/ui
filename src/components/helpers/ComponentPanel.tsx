import React from "react";

import toast from "react-hot-toast";

import { copyComponentCode } from "@/utils/copyComponentCode";
import { getComponentDocsUrl } from "@/utils/getComponentDocsUrl";

import { Button } from "../Button";

export type ComponentPanelProps = {
  component: string;
};

export const ComponentPanel: React.FC<ComponentPanelProps> = ({
  component,
}) => {
  const handleCopy = async () => {
    toast.promise(copyComponentCode(component), {
      loading: "Делаем запросы...",
      error: (err) =>
        err instanceof Error ? err.message : "Ой, ошибочка вышла",
      success: "Код успешно скопирован",
    });
  };

  const clearComponentName = component.split(".")[0];
  const docsUrl = getComponentDocsUrl(component);

  return (
    <div className="p-3 border rounded-md">
      <h2 className="text-xl mb-2">{clearComponentName}</h2>

      <div className="flex flex-col md:flex-row items-start gap-2">
        <Button onClick={() => handleCopy()}>Скопировать код компонента</Button>
        <Button as="a" href={docsUrl} target="_blank" rel="noopener noreferrer">
          Ссылка на доку
        </Button>
      </div>
    </div>
  );
};

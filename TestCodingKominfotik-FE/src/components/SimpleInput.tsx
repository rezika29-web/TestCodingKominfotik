import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  Select,
  SelectProps,
  Upload,
  UploadProps,
  message,
} from "antd";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./InputNumber.module.scss";
import PrimaryButton from "./Buttons";
import { UploadChangeParam } from "antd/es/upload";

export default function SimpleInput(props: InputProps) {
  const {
    value,
    defaultValue,
    onChange,
    placeholder,
    className,
    ...restProps
  } = props;
  return (
    <Input
      {...restProps}
      className={twMerge("font-inter, text-[#9DA2AD], p-4", className)}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

interface InputSelectProps {
  options?: { value: string; label: string }[];
}

export function InputSelect(props: SelectProps & InputSelectProps) {
  const {
    className,
    options = [],
    placeholder,
    disabled,
    defaultValue,
    value,
  } = props;
  return (
    <div>
      <Select
        className={twMerge("font-inter", className)}
        showSearch
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        defaultValue={defaultValue}
        value={value}
        options={options}
        disabled={disabled}
      />
    </div>
  );
}

export function UploadComponents(props: UploadProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { onChange, children, ...restProps } = props;

  const handleChange = (info: UploadChangeParam) => {
    if (onChange) {
      onChange(info);
    }
    if (info.file.status !== "uploading") {
      // console.log(info.file, info.fileList)
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      if (info.file.response) {
        setSelectedImage(info.file.response.url);
      }
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div>
      <Upload {...restProps} onChange={handleChange}>
        <PrimaryButton icon={<UploadOutlined />}>{children}</PrimaryButton>
      </Upload>
    </div>
  );
}

export function InputNumbers(props: InputNumberProps) {
  const {
    className,
    onChange,
    addonAfter,
    min,
    max,
    defaultValue,
    ...restProps
  } = props;

  return (
    <InputNumber
      addonAfter={addonAfter}
      min={min !== undefined ? min : 1}
      max={max !== undefined ? max : 10}
      defaultValue={defaultValue !== undefined ? defaultValue : 3}
      onChange={onChange}
      className={twMerge(styles.InputNumber, " font-inter w-full ", className)}
      {...restProps}
    />
  );
}

export function Uploads(props: UploadProps) {
  const { Dragger } = Upload;

  const {
    name = "file",
    multiple = true,
    action,
    onChange,
    onDrop,
    className,
    fileList,
    listType,
    disabled,
  } = props;

  return (
    <Dragger
      disabled={disabled}
      name={name}
      multiple={multiple}
      action={action}
      onChange={onChange}
      onDrop={onDrop}
      className={twMerge(className)}
      fileList={fileList}
      listType={listType}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
}

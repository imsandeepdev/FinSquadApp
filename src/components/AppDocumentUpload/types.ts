export interface AppDocumentUploadProps {
  title?: string;

  /** Label shown above the document-type dropdown. Defaults to "Document Type". */
  docTypeLabel?: string;
  docTypeOptions: string[];
  docTypeValue?: string;
  onDocTypeSelect: (value: string) => void;

  /** Local file URI of the captured/selected image, if any. */
  imageUri?: string;
  onImageSelected: (uri: string) => void;
  onImageRemoved?: () => void;

  isError?: boolean;
  errorMessage?: string;
}

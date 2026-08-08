export interface AppDocumentUploadProps {
  title?: string;

  /** Label shown above the document-type dropdown. Defaults to "Document Type". */
  docTypeLabel?: string;
  /**
   * When omitted (or empty), the document-type dropdown is skipped
   * entirely and the component behaves as a single fixed-purpose upload
   * (e.g. "Upload Income Proof") — `title` is used as the label instead.
   */
  docTypeOptions?: string[];
  docTypeValue?: string;
  onDocTypeSelect?: (value: string) => void;

  /**
   * Single-image mode (e.g. Bank Details — one cheque/passbook photo).
   * Ignored if front/back props below are supplied.
   */
  imageUri?: string;
  onImageSelected?: (uri: string) => void;
  onImageRemoved?: () => void;

  /**
   * Front/back mode (e.g. Nominee / Co-Applicant ID proof) — renders two
   * side-by-side upload slots instead of one. Supplying either
   * onFrontImageSelected or onBackImageSelected switches the component
   * into this mode.
   */
  frontImageUri?: string;
  backImageUri?: string;
  onFrontImageSelected?: (uri: string) => void;
  onBackImageSelected?: (uri: string) => void;
  onFrontImageRemoved?: () => void;
  onBackImageRemoved?: () => void;

  isError?: boolean;
  errorMessage?: string;

  /** Locks the doc-type dropdown and both upload slots (e.g. "same as nominee" sync). View-only. */
  disabled?: boolean;
}

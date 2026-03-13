export interface ImagesPreviewProps {
  images: string[];
  onPressImage: (image: string) => void;
  selectedImage: string;
}

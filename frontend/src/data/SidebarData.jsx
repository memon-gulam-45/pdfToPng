import { FileText, Sliders, Image, FileImage, Palette, Eraser, RotateCcw, Expand, Gauge, Info, Code } from "lucide-react";

export const menuItems = [
    {
      id: "pdf-to-png",
      label: "PDF to PNG",
      icon: <FileText className="w-5 h-5" />,
      description: "Convert PDF to PNG",
    },
    {
      id: "image-compress",
      label: "Image Compressor",
      icon: <Sliders className="w-5 h-5" />,
      description: "Compress images with quality control",
    },
    {
      id: "image-upscale",
      label: "AI Upscaler",
      icon: <Sliders className="w-5 h-5 text-purple-500" />,
      description: "Increase image resolution",
    },
    {
      id: "image-to-webp",
      label: "Image to WebP",
      icon: <Image className="w-5 h-5" />,
      description: "Convert to WebP",
    },
    {
      id: "image-to-jpg",
      label: "Image to JPG",
      icon: <FileImage className="w-5 h-5" />,
      description: "Convert to JPG",
    },
    {
      id: "image-to-grayscale",
      label: "Image to Grayscale",
      icon: <Palette className="w-5 h-5" />,
      description: "Convert images to grayscale",
    },
    {
      id: "remove-bg",
      label: "Remove Background",
      icon: <Eraser className="w-5 h-5" />,
      description: "Remove background",
    },
    {
      id: "rotate-flip",
      label: "Rotate & Flip",
      icon: <RotateCcw className="w-5 h-5" />,
      description: "Rotate or flip images",
    },
    {
      id: "image-resize",
      label: "Image Resize",
      icon: <Expand className="w-5 h-5" />,
      description: "Resize images",
    },
    {
      id: "image-dpi",
      label: "Image DPI Converter",
      icon: <Gauge className="w-5 h-5" />,
      description: "Change image DPI",
    },
    {
      id: "image-metadata",
      label: "Metadata Viewer",
      icon: <Info className="w-5 h-5" />,
      description: "View & strip image metadata",
    },
    {
      id: "image-to-base64",
      label: "Image to Base64",
      icon: <Code className="w-5 h-5" />,
      description: "Convert image to Base64 Data URI",
    },
  ];
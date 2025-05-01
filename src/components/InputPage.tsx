import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Upload, ArrowRight } from "lucide-react";

interface InputPageProps {
  onSubmit?: (data: {
    patientId: string;
    analysisType: "text" | "image" | "both";
    imageFile?: File;
  }) => void;
}

const InputPage: React.FC<InputPageProps> = ({ onSubmit = () => {} }) => {
  const navigate = useNavigate();
  const [textPatientId, setTextPatientId] = useState("");
  const [imagePatientId, setImagePatientId] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleSubmit = () => {
    // Determine which analysis type to use based on inputs
    let analysisType: "text" | "image" | "both" = "text";
    let patientId = textPatientId;

    if (textPatientId && imagePatientId && imageFile) {
      analysisType = "both";
      // Use text patient ID as the primary one
    } else if (!textPatientId && imagePatientId && imageFile) {
      analysisType = "image";
      patientId = imagePatientId;
    } else if (textPatientId && (!imagePatientId || !imageFile)) {
      analysisType = "text";
    } else {
      setError(
        "Please enter at least a Patient ID for text-based analysis or both Patient ID and image for image-based analysis.",
      );
      return;
    }

    // Call the onSubmit prop with the data
    onSubmit({
      patientId,
      analysisType,
      imageFile: imageFile || undefined,
    });

    // Navigate to results page
    navigate("/results");
  };

  return (
    <div className="min-h-screen to-white p-6 flex flex-col items-center justify-center from-[#945883] bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C148965502-1746092617424-pinkribbonbreastcancerawarenessmonthseamlessbackgroundillustrationvectorjpg')]">
      <div className="w-full max-w-6xl">
        <h1 className="font-bold text-center text-pink-700 mb-8 font-sans text-5xl">
          Breast Cancer Detection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text-based Analysis Section */}
          <Card className="shadow-md border-pink-100 bg-white">
            <CardHeader className="bg-pink-50 rounded-t-lg">
              <CardTitle className="font-bold text-pink-600">
                To Get Text-Based Results
              </CardTitle>
              <CardDescription>Enter Patient ID For Analysis</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="text-patient-id"
                    className="font-bold text-pink-600"
                  >
                    Patient ID
                  </Label>
                  <Input
                    id="text-patient-id"
                    placeholder="Enter Patient ID"
                    value={textPatientId}
                    onChange={(e) => setTextPatientId(e.target.value)}
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image-based Analysis Section */}
          <Card className="shadow-md border-pink-100 bg-white">
            <CardHeader className="bg-pink-50 rounded-t-lg">
              <CardTitle className="font-bold text-pink-600">
                To Get Scan Image-Based Results
              </CardTitle>
              <CardDescription>
                Upload Mammogram Image For Analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="image-patient-id"
                    className="text-pink-600 font-bold"
                  >
                    Patient ID
                  </Label>
                  <Input
                    id="image-patient-id"
                    placeholder="Enter Patient ID"
                    value={imagePatientId}
                    onChange={(e) => setImagePatientId(e.target.value)}
                    className="border-pink-200 focus:border-pink-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="image-upload"
                    className="font-bold text-pink-600"
                  >
                    Upload Mammogram Image
                  </Label>
                  <div className="border-2 border-dashed border-pink-200 rounded-md p-6 flex flex-col items-center justify-center bg-pink-50/50 hover:bg-pink-50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/jpeg,image/png,image/dicom"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center text-pink-600"
                    >
                      <Upload className="h-10 w-10 text-pink-500 mb-2" />
                      <span className="text-sm text-pink-700 font-medium">
                        {imageFile
                          ? imageFile.name
                          : "Click to upload or drag and drop"}
                      </span>
                      <span className="text-xs text-pink-400 mt-1">
                        JPG, PNG, or DICOM format
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleSubmit}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-2 rounded-full flex items-center gap-2 shadow-md"
            size="lg"
          >
            Submit <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="link"
            onClick={() => navigate("/")}
            className="text-pink-600 hover:text-pink-800"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputPage;

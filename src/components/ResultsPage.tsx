import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { PrinterIcon, FileTextIcon } from "lucide-react";

interface ResultsPageProps {
  patientId?: string;
  textBasedResults?: {
    diagnosis: "Benign" | "Malignant" | "";
    description: string;
  };
  imageBasedResults?: {
    diagnosis: "Benign" | "Malignant" | "";
    description: string;
    breast: "Left" | "Right" | "";
    breastDensity: string;
    imageView: string;
    abnormalityId: string;
    abnormalityType: string;
    calcificationType: string;
    calcificationDistribution: string;
    assessment: string;
    subtlety: string;
    imageUrl?: string;
  };
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  patientId = "",
  textBasedResults = {
    diagnosis: "",
    description: "",
  },
  imageBasedResults = {
    diagnosis: "",
    description: "",
    breast: "",
    breastDensity: "",
    imageView: "",
    abnormalityId: "",
    abnormalityType: "",
    calcificationType: "",
    calcificationDistribution: "",
    assessment: "",
    subtlety: "",
    imageUrl: "",
  },
}) => {
  const handlePrintPreview = () => {
    // Create a new window for print preview
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (!printWindow) return;

    // Generate the print-friendly HTML content
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Patient Report</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1, h2 {
            color: #d53f8c;
            margin-bottom: 16px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #d53f8c;
            padding-bottom: 10px;
          }
          .section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 5px;
          }
          .section-title {
            font-weight: bold;
            margin-bottom: 10px;
            color: #d53f8c;
          }
          .field {
            margin-bottom: 8px;
          }
          .field-label {
            font-weight: bold;
            display: inline-block;
            width: 200px;
          }
          .field-value {
            display: inline-block;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          @media print {
            body {
              padding: 0;
              margin: 0;
            }
            button {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Breast Cancer Detection Report</h1>
          <h2>Patient Report for ID: ${patientId || ""}</h2>
        </div>
        
        <div class="section">
          <div class="section-title">Patient Information</div>
          <div class="field">
            <span class="field-label">Patient ID:</span>
            <span class="field-value">${patientId || ""}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Text-Based Analysis</div>
          <div class="field">
            <span class="field-label">Diagnosis:</span>
            <span class="field-value">${textBasedResults.diagnosis || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Description:</span>
            <span class="field-value">${textBasedResults.description || ""}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Image-Based Analysis</div>
          <div class="field">
            <span class="field-label">Diagnosis:</span>
            <span class="field-value">${imageBasedResults.diagnosis || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Left or Right Breast:</span>
            <span class="field-value">${imageBasedResults.breast || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Breast Density:</span>
            <span class="field-value">${imageBasedResults.breastDensity || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Image View:</span>
            <span class="field-value">${imageBasedResults.imageView || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Abnormality ID:</span>
            <span class="field-value">${imageBasedResults.abnormalityId || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Abnormality Type:</span>
            <span class="field-value">${imageBasedResults.abnormalityType || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Calcification Type:</span>
            <span class="field-value">${imageBasedResults.calcificationType || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Calcification Distribution:</span>
            <span class="field-value">${imageBasedResults.calcificationDistribution || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Assessment:</span>
            <span class="field-value">${imageBasedResults.assessment || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Subtlety:</span>
            <span class="field-value">${imageBasedResults.subtlety || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Description:</span>
            <span class="field-value">${imageBasedResults.description || ""}</span>
          </div>
        </div>

        <div class="footer">
          <p>Early Detection Saves Lives</p>
          <p>© ${new Date().getFullYear()} Breast Cancer Detection System</p>
        </div>

        <div style="text-align: center; margin-top: 20px;">
          <button onclick="window.print()" style="padding: 10px 20px; background-color: #d53f8c; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Print Report
          </button>
        </div>
      </body>
      </html>
    `;

    // Write the content to the new window
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  const handlePrint = () => {
    // Use the same print preview function but trigger print immediately
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (!printWindow) return;

    // Generate the print-friendly HTML content (same as in handlePrintPreview)
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Patient Report</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1, h2 {
            color: #d53f8c;
            margin-bottom: 16px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #d53f8c;
            padding-bottom: 10px;
          }
          .section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 5px;
          }
          .section-title {
            font-weight: bold;
            margin-bottom: 10px;
            color: #d53f8c;
          }
          .field {
            margin-bottom: 8px;
          }
          .field-label {
            font-weight: bold;
            display: inline-block;
            width: 200px;
          }
          .field-value {
            display: inline-block;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          @media print {
            body {
              padding: 0;
              margin: 0;
            }
            button {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Breast Cancer Detection Report</h1>
          <h2>Patient Report for ID: ${patientId || ""}</h2>
        </div>
        
        <div class="section">
          <div class="section-title">Patient Information</div>
          <div class="field">
            <span class="field-label">Patient ID:</span>
            <span class="field-value">${patientId || ""}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Text-Based Analysis</div>
          <div class="field">
            <span class="field-label">Diagnosis:</span>
            <span class="field-value">${textBasedResults.diagnosis || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Description:</span>
            <span class="field-value">${textBasedResults.description || ""}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Image-Based Analysis</div>
          <div class="field">
            <span class="field-label">Diagnosis:</span>
            <span class="field-value">${imageBasedResults.diagnosis || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Left or Right Breast:</span>
            <span class="field-value">${imageBasedResults.breast || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Breast Density:</span>
            <span class="field-value">${imageBasedResults.breastDensity || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Image View:</span>
            <span class="field-value">${imageBasedResults.imageView || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Abnormality ID:</span>
            <span class="field-value">${imageBasedResults.abnormalityId || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Abnormality Type:</span>
            <span class="field-value">${imageBasedResults.abnormalityType || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Calcification Type:</span>
            <span class="field-value">${imageBasedResults.calcificationType || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Calcification Distribution:</span>
            <span class="field-value">${imageBasedResults.calcificationDistribution || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Assessment:</span>
            <span class="field-value">${imageBasedResults.assessment || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Subtlety:</span>
            <span class="field-value">${imageBasedResults.subtlety || ""}</span>
          </div>
          <div class="field">
            <span class="field-label">Description:</span>
            <span class="field-value">${imageBasedResults.description || ""}</span>
          </div>
        </div>

        <div class="footer">
          <p>Early Detection Saves Lives</p>
          <p>© ${new Date().getFullYear()} Breast Cancer Detection System</p>
        </div>
      </body>
      </html>
    `;

    // Write the content to the new window
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();

    // Trigger print after the content is loaded
    printWindow.onload = function () {
      printWindow.print();
    };
  };

  return (
    <div className="min-h-screen from-pink-50 to-white p-6 flex justify-center items-center bg-[url('https://storage.googleapis.com/tempo-public-images/github%7C148965502-1745869689803-pinkribbonbreastcancerawarenessmonthseamlessbackgroundillustrationvectorjpg')]">
      <div className="max-w-7xl mx-auto h-2/6 ">
        <h1 className="font-bold mb-6 text-center max-w-6xl text-5xl text-pink-700 min-w-min flex justify-start items-start">
          {" "}
          Diagnostic Results
        </h1>
        <p className="text-center mb-8 text-3xl font-bold bg-pink-100 text-pink-600">
          Patient ID: {patientId}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-gradient-to-r">
          {/* Text-based Results Column */}
          <Card className="shadow-lg border-pink-100 bg-[#ffffff]">
            <CardHeader className="bg-pink-50 border-b border-pink-100">
              <CardTitle className="font-bold text-pink-700">
                Text-Based Analysis
              </CardTitle>
              <CardDescription>
                Results Based on Tumor Data Analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Pathology Status:</h3>
                <Badge className={`text-white px-4 py-2 text-base bg-gray-300`}>
                  Pending
                </Badge>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Summary Report:</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">
                      Patient ID:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Diagnosis:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Description:
                    </span>
                    <p className="mt-1 text-gray-600"></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image-based Results Column */}
          <Card className="shadow-lg border-pink-100 bg-pink-200">
            <CardHeader className="bg-pink-50 border-b border-pink-100">
              <CardTitle className="font-bold text-pink-700">
                Image-Based Analysis
              </CardTitle>
              <CardDescription>
                Results Based on Mammogram Analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 bg-[#fdfdfd]">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Pathology Status:</h3>
                <Badge className={`text-white px-4 py-2 text-base bg-gray-300`}>
                  Pending
                </Badge>
              </div>

              <div className="mt-4 bg-[#ffffff]">
                <h3 className="text-lg font-medium mb-2">Summary Report:</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <span className="font-medium text-gray-700">
                      Diagnosis:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Breast:</span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Breast Density:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Image View:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Abnormality ID:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Abnormality Type:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Calcification Type:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Calcification Distribution:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Assessment:
                    </span>
                    <span className="ml-2"></span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Subtlety:</span>
                    <span className="ml-2"></span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="font-medium text-gray-700">
                    Description:
                  </span>
                  <p className="mt-1 text-gray-600"></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8 bg-pink-100" />

        {/* Report Generation Section */}
        <div className="flex justify-center space-x-4 mb-8 ">
          <Button
            variant="outline"
            className="border-pink-300 text-pink-800 hover:bg-pink-100"
            onClick={handlePrintPreview}
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            Print Preview
          </Button>
          <Button
            className="bg-pink-600 hover:bg-pink-700 text-white"
            onClick={handlePrint}
          >
            <PrinterIcon className="mr-2 h-4 w-4" />
            Print Report
          </Button>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>Early Detection Saves Lives</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Breast Cancer Detection System
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ResultsPage;

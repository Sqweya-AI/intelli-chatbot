import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, File, Type, Upload } from 'lucide-react';

const CreateChatbot = () => {
  const [step, setStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [manualLink, setManualLink] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [customText, setCustomText] = useState('');

  const handleWebsiteCrawl = () => {
    // Implement website crawling logic
    console.log('Crawling website:', websiteUrl);
  };

  const handleAddLink = () => {
    // Implement adding manual link logic
    console.log('Adding manual link:', manualLink);
    setManualLink('');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFiles(Array.from(event.target.files));
    }
  };

  const handleCreateChatbot = () => {
    // Implement chatbot creation logic
    console.log('Creating chatbot with:', {
      websiteUrl,
      uploadedFiles,
      customText,
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Create your Chatbot - step {step}/3</CardTitle>
        <p className="text-sm text-muted-foreground">
          Here you can add the sources that your AI Chatbot will be trained on.
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="website" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="website" onClick={() => setStep(1)}>
              <Globe className="mr-2 h-4 w-4" />
              Website Links
            </TabsTrigger>
            <TabsTrigger value="files" onClick={() => setStep(2)}>
              <File className="mr-2 h-4 w-4" />
              Files
            </TabsTrigger>
            <TabsTrigger value="text" onClick={() => setStep(3)}>
              <Type className="mr-2 h-4 w-4" />
              Text
            </TabsTrigger>
          </TabsList>
          <TabsContent value="website">
            <div className="space-y-4">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Your Website</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <Input
                    type="url"
                    name="website"
                    id="website"
                    className="flex-1 rounded-none rounded-l-md"
                    placeholder="https://"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                  <Button
                    type="button"
                    className="rounded-none rounded-r-md"
                    onClick={handleWebsiteCrawl}
                  >
                    Crawl
                  </Button>
                </div>
              </div>
              <div>
                <label htmlFor="manual-link" className="block text-sm font-medium text-gray-700">Add manual links</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <Input
                    type="url"
                    name="manual-link"
                    id="manual-link"
                    className="flex-1 rounded-none rounded-l-md"
                    placeholder="https://"
                    value={manualLink}
                    onChange={(e) => setManualLink(e.target.value)}
                  />
                  <Button
                    type="button"
                    className="rounded-none rounded-r-md"
                    onClick={handleAddLink}
                  >
                    + Add Link
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="files">
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-1 text-sm text-gray-600">Click to upload files or Drag & Drop</p>
                <p className="text-xs text-gray-500">.pdf, .doc, .docx or .txt (max. 5MB)</p>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                />
              </div>
              {uploadedFiles.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Uploaded files:</h4>
                  <ul className="mt-2 divide-y divide-gray-200">
                    {uploadedFiles.map((file, index) => (
                      <li key={index} className="py-2 text-sm text-gray-600">{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Button
                type="button"
                className="w-full"
                onClick={handleCreateChatbot}
              >
                Initiate Training with Files
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="text">
            <div className="space-y-4">
              <div>
                <label htmlFor="custom-text" className="block text-sm font-medium text-gray-700">Write here any extra text that you consider relevant for your audience</label>
                <Textarea
                  id="custom-text"
                  className="mt-1"
                  rows={6}
                  placeholder="Write your text here..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Total Characters: {customText.length}</p>
                <Button
                  type="button"
                  onClick={handleCreateChatbot}
                >
                  Create Chatbot
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700">Usage Overview</h3>
          <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Links</dt>
              <dd className="mt-1 text-sm text-gray-900">0/5</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Files</dt>
              <dd className="mt-1 text-sm text-gray-900">0/20</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Characters</dt>
              <dd className="mt-1 text-sm text-gray-900">0/100K</dd>
            </div>
          </dl>
        </div>

      </CardContent>
    </Card>
  );
};

export default CreateChatbot;
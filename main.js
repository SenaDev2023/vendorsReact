import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function VendorManagementApp() {
  const [vendors, setVendors] = useState([]);
  const [vendorName, setVendorName] = useState("");
  const [priority, setPriority] = useState("");

  const addVendor = () => {
    if (vendorName && priority) {
      setVendors([...vendors, { name: vendorName, priority: parseInt(priority) }]);
      setVendorName("");
      setPriority("");
    }
  };

  const sortVendors = () => {
    setVendors([...vendors].sort((a, b) => a.priority - b.priority));
  };

  return (
    <div className="p-6 max-w-lg mx-auto space-y-4">
      <h1 className="text-xl font-bold">Vendor Management</h1>
      <div className="flex space-x-2">
        <Input
          placeholder="Vendor Name"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <Button onClick={addVendor}>Add</Button>
      </div>
      <Button onClick={sortVendors} className="w-full bg-blue-500">Sort Vendors</Button>
      <div className="space-y-2">
        {vendors.map((vendor, index) => (
          <Card key={index} className="p-2">
            <CardContent>
              {vendor.name} (Priority: {vendor.priority})
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import React from "react";

const TrustPoints = () => {
  const columnHeaders = [
    "Prop Firm Name",
    "Challenge Type",
    "Challenge Size",
    "Prize Before",
    "Prize After",
    "Points",
    "Coupon",
    "Discount",
    "Status",
    "Upload Invoice",
  ];

  const rows = [
    {
      propFirmName: "Alpha Trading",
      challengeType: "Three Phase Challenge",
      challengeSize: "1,00,000",
      prizeBefore: "100",
      prizeAfter: "94",
      points: "54",
      coupon: "THE TRUSTED",
      discount: "43$",
      status: "Pending",
      uploadInvoice: "Upload Invoice",
    },
    {
      propFirmName: "Beta Trading",
      challengeType: "Two Phase Challenge",
      challengeSize: "50,000",
      prizeBefore: "80",
      prizeAfter: "70",
      points: "40",
      coupon: "DISCOUNTED",
      discount: "25$",
      status: "Completed",
      uploadInvoice: "Upload Invoice",
    },
    {
      propFirmName: "Beta Trading",
      challengeType: "Two Phase Challenge",
      challengeSize: "50,000",
      prizeBefore: "80",
      prizeAfter: "70",
      points: "40",
      coupon: "DISCOUNTED",
      discount: "25$",
      status: "Completed",
      uploadInvoice: "Upload Invoice",
    },
    {
      propFirmName: "Beta Trading",
      challengeType: "Two Phase Challenge",
      challengeSize: "50,000",
      prizeBefore: "80",
      prizeAfter: "70",
      points: "40",
      coupon: "DISCOUNTED",
      discount: "25$",
      status: "Completed",
      uploadInvoice: "Upload Invoice",
    },
    {
      propFirmName: "Beta Trading",
      challengeType: "Two Phase Challenge",
      challengeSize: "50,000",
      prizeBefore: "80",
      prizeAfter: "70",
      points: "40",
      coupon: "DISCOUNTED",
      discount: "25$",
      status: "Completed",
      uploadInvoice: "Upload Invoice",
    },
    {
      propFirmName: "Beta Trading",
      challengeType: "Two Phase Challenge",
      challengeSize: "50,000",
      prizeBefore: "80",
      prizeAfter: "70",
      points: "40",
      coupon: "DISCOUNTED",
      discount: "25$",
      status: "Completed",
      uploadInvoice: "Upload Invoice",
    },
    {
      propFirmName: "Beta Trading",
      challengeType: "Two Phase Challenge",
      challengeSize: "50,000",
      prizeBefore: "80",
      prizeAfter: "70",
      points: "40",
      coupon: "DISCOUNTED",
      discount: "25$",
      status: "Completed",
      uploadInvoice: "Upload Invoice",
    },
    // Add more rows as needed
  ];

  return (
    <div className="flex flex-col bg-gray-800 px-4 py-6">
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold text-white mb-6 text-center">
          Claim Trust Points & Cashback
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-col mx-auto min-w-[900px] lg:min-w-full">
          {/* Header Row */}
          <div className="flex flex-row bg-sky-500 justify-evenly p-4 gap-4 text-white text-xs lg:text-sm rounded-t-[20px]">
            {columnHeaders.map((header, index) => (
              <p key={index} className="flex-1 text-center">
                {header}
              </p>
            ))}
          </div>

          {/* Data Rows */}
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="flex flex-row text-slate-200 justify-evenly p-4 gap-4 bg-zinc-900 text-xs lg:text-sm">
                {Object.values(row).map((value, colIndex) => (
                  <p key={colIndex} className="flex-1 text-center">
                    {value}
                  </p>
                ))}
              </div>
              {/* Add HR below each row except the last one */}
              {rowIndex < rows.length - 1 && <hr className="border-gray-700" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustPoints;

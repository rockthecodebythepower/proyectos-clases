/* The client sales house wood flooring materials on his website. He needs a function which would help customers to calculate price and needed packages for their room area.

HTML page is already pre-developed. All needed page elements are present and have required IDs and attributes. All you need is just to develop a JavaScript calculator function and make it work correctly.

Customers should type their room area in "Square Footage Needed" input (id: "total_sqf") and click the "Calculate" button (id: "btn_calculate"). The result price should appear in "Total Price" SPAN (id: "total_price") and the result number of needed packages should appear in "Total Bundles/Boxes" SPAN (id: "total_price").

Minimum sold unit is one box.

Result price value should be rounded by two digits after decimal point.

Please note that all coding should be done in plain JavaScript, not using jQuery or any other framework.

Click the "Workspace" tab above to move forward to coding environment. */

function calc_flooring() {
  var sqfPrice = parseFloat(
    document.getElementById("sqf_price").getAttribute("data-value")
  );
  var pieceWidth = parseFloat(
    document.getElementById("p_width").getAttribute("data-value")
  );
  var pieceLength = parseFloat(
    document.getElementById("p_height").getAttribute("data-value")
  );
  var piecesPerBox = parseInt(
    document.getElementById("box_pnum").getAttribute("data-value")
  );

  var totalSqf = parseFloat(document.getElementById("total_sqf").value);

  var totalBoxes = Math.ceil(
    totalSqf / (pieceWidth * pieceLength * piecesPerBox)
  );

  console.log(totalBoxes);
  console.log(piecesPerBox);
  console.log(totalBoxes * piecesPerBox * 4.85);
  var totalPrice = (totalBoxes * piecesPerBox * sqfPrice).toFixed(2);

  document.getElementById("total_boxes").textContent = totalBoxes;
  document.getElementById("total_price").textContent = totalPrice;
}

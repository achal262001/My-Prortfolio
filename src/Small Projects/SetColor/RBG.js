import React, { useState } from "react";

// Function to convert RGB values to Hex code
const rgbToHex = (r, g, b) => {
  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Predefined colors (primary, secondary, tertiary colors)
const predefinedColors = [
  { r: 255, g: 0, b: 0 }, // Red (Primary)
  { r: 0, g: 255, b: 0 }, // Green (Primary)
  { r: 0, g: 0, b: 255 }, // Blue (Primary)
  { r: 255, g: 255, b: 0 }, // Yellow (Secondary)
  { r: 0, g: 255, b: 255 }, // Cyan (Secondary)
  { r: 255, g: 0, b: 255 }, // Magenta (Secondary)
  { r: 255, g: 165, b: 0 }, // Orange (Tertiary)
  { r: 128, g: 0, b: 128 }, // Purple (Tertiary)
  { r: 128, g: 128, b: 0 }, // Olive (Tertiary)
  { r: 0, g: 128, b: 128 }, // Teal (Tertiary)
  { r: 128, g: 128, b: 128 }, // Gray
  { r: 0, g: 0, b: 0 }, // Black
  { r: 255, g: 255, b: 255 }, // White
  { r: 255, g: 192, b: 203 }, // Pink
  { r: 173, g: 216, b: 230 }, // Light Blue
  { r: 240, g: 128, b: 128 }, // Light Coral
  { r: 144, g: 238, b: 144 }, // Light Green
  { r: 245, g: 222, b: 179 }, // Wheat
  { r: 255, g: 215, b: 0 }, // Gold
  { r: 220, g: 20, b: 60 }, // Crimson
];

const RBG = () => {
  const [selectedColor, setSelectedColor] = useState(predefinedColors[0]); // Default selected color

  // Handle color box click to set the selected color
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // Handle RGB input changes
  const handleRChange = (e) =>
    setSelectedColor({
      ...selectedColor,
      r: Math.max(0, Math.min(255, parseInt(e.target.value) || 0)),
    });
  const handleGChange = (e) =>
    setSelectedColor({
      ...selectedColor,
      g: Math.max(0, Math.min(255, parseInt(e.target.value) || 0)),
    });
  const handleBChange = (e) =>
    setSelectedColor({
      ...selectedColor,
      b: Math.max(0, Math.min(255, parseInt(e.target.value) || 0)),
    });

  const hexCode = rgbToHex(selectedColor.r, selectedColor.g, selectedColor.b);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="text-slate-200 text-2xl">Select and Modify a Color 🎨</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {predefinedColors.map((color, index) => {
          const rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
          return (
            <div
              key={index}
              onClick={() => handleColorClick(color)}
              style={{
                backgroundColor: rgbColor,
                width: "60px",
                height: "60px",
                cursor: "pointer",
                border: selectedColor === color ? "3px solid black" : "none",
              }}
            />
          );
        })}
      </div>

      <div>
        <h3>Modify RGB Values</h3>
        <label>
          R:
          <input
            type="number"
            value={selectedColor.r}
            onChange={handleRChange}
            min="0"
            max="255"
            style={{ margin: "0 10px", width: "60px" }}
          />
        </label>
        <label>
          G:
          <input
            type="number"
            value={selectedColor.g}
            onChange={handleGChange}
            min="0"
            max="255"
            style={{ margin: "0 10px", width: "60px" }}
          />
        </label>
        <label>
          B:
          <input
            type="number"
            value={selectedColor.b}
            onChange={handleBChange}
            min="0"
            max="255"
            style={{ margin: "0 10px", width: "60px" }}
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Selected Hex Code: {hexCode}</h3>
        <div
          style={{
            backgroundColor: `rgb(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b})`,
            width: "200px",
            height: "200px",
            margin: "10px auto",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default RBG;

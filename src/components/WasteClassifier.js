import { useState } from "react";
import axios, { endpoints } from "../configs/Apis";

const WasteClassifier = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
    setResult(null); // reset kết quả khi chọn ảnh mới
  };

  const classify = async () => {
    if (!file) {
      alert("Vui lòng chọn ảnh!");
      return;
    }

    let formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      let res = await axios.post(endpoints.classify, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Có lỗi xảy ra khi phân loại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center text-success mb-4">
          🗑️ Phân loại rác thải bằng AI
        </h3>

        <div className="mb-3">
          <label className="form-label fw-bold">Chọn ảnh rác thải</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {preview && (
          <div className="text-center mt-3">
            <img
              src={preview}
              alt="Preview"
              className="img-fluid border"
              style={{
                maxHeight: "300px",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        <div className="text-center mt-4">
          <button
            className="btn btn-success px-4"
            onClick={classify}
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Đang xử lý...
              </>
            ) : (
              "Phân loại"
            )}
          </button>
        </div>

        {result && (
          <div className="alert alert-info mt-4">
            <h5 className="text-success">Kết quả AI</h5>
            <p>
              <b>Loại:</b> {result.label}
            </p>
            <p>
              <b>Độ tin cậy:</b> {result.confidence}
            </p>
            <p>
              <b>Gợi ý xử lý:</b> {result.suggestion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WasteClassifier;

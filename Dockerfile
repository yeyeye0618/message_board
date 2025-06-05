FROM python:3.11-slim

# 設定工作目錄
WORKDIR /app

# 複製 requirements 並安裝
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 複製整個專案（假設 backend 資料夾在專案中）
COPY . .

# 設定必要環境變數
ENV PYTHONUNBUFFERED=1

# Render 使用動態 PORT，app.py 中需讀取它
EXPOSE 5000

# 直接用 python 執行 backend/app.py
CMD ["python", "backend/app.py"]

import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error("Error caught by ErrorBoundary:", error);
    // Обновляем состояние, чтобы следующий рендер показал запасной UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно добавить логирование ошибки в сервис ошибок
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleButtonClick = () => {
    try {
      // Эмулируем ошибку, возникающую при клике на кнопку
      throw new Error("Error triggered by button click");
    } catch (error) {
      console.error("Error caught in button click handler:", error);
      this.setState({ hasError: true });
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h2 className="error__title">Something went wrong.</h2>
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.handleButtonClick}>Trigger Error</button>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;

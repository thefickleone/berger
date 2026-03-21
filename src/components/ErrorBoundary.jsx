
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-[50vh] bg-gray-900 text-white p-4 text-center">
          <p>The 3D experience couldn't load, but you can still browse the site below!</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;

// Предохранитель (Error Boundary)

import { Component } from "react";
import ErrorMessage from '../errorMessage/ErrorMessage';

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError() {
        // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            // Здесь можно рендерить запасной интерфейс
            return <ErrorMessage />
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
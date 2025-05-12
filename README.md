# BudgetBuddy: Simple Financial Clarity

## Overview
BudgetBuddy is a comprehensive web application designed to help individuals manage their finances more effectively. Users can track their income, expenses, investments, and budget in one place, leveraging the app to gain valuable insights into their financial health and make informed decisions.

## Features
- **Expense Tracking:** Log and categorize daily expenses to keep an eye on spending habits.
- **Income Management:** Record different sources of income for a clear view of total earnings.
- **Investment Monitoring:** Track investments and see how they contribute to financial goals.
- **Budget Planning:** Set budgets for various categories and monitor adherence to these budgets.
- **Financial Insights:** Receive personalized insights based on spending patterns, savings, and investments.
- **Reports and Analytics:** Generate detailed reports to understand financial progress over time.

## Technology Stack
- **Frontend:** React.js for a responsive and dynamic user interface.
- **Backend:** Node.js with Express.js, providing a solid foundation for RESTful API services.
- **Database:** MongoDB, chosen for its flexibility in handling diverse data types.
- **Authentication:** JWT (JSON Web Tokens) for secure user authentication.

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- MongoDB (v4.4.0 or higher)
- npm (v6.0.0 or higher)

### Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/4acle/BudgetBuddy.git
   cd BudgetBuddy
   ```

2. **Install Dependencies**
   ```sh
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Application**
   ```sh
   # Start backend server (from backend directory)
   npm start

   # Start frontend application (from frontend directory)
   npm start
   ```

## Usage
After installation, navigate to `http://localhost:3000` in your web browser to start tracking your finances. Begin by creating an account or logging in, then proceed to enter your income, expenses, and set up budgets.

### Key Features in Detail
1. **Dashboard Overview**
   - View your financial summary
   - Track spending trends
   - Monitor budget progress

2. **Transaction Management**
   - Add new transactions
   - Categorize expenses
   - Set recurring transactions

3. **Budget Planning**
   - Create monthly budgets
   - Set category limits
   - Receive alerts for overspending

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
For any questions or suggestions, please open an issue in the GitHub repository.

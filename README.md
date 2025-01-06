# ETL Monitor Dashboard

A modern web application for monitoring and managing ETL processes, built with React and SQL Server Integration Services (SSIS).

## Features

- ETL Process Monitoring
  - Track execution status of ETL packages
  - Real-time status updates
  - Performance metrics visualization
- Job Management
  - Start/stop SSIS packages
  - View SQL Server Agent job statuses
- Resource Monitoring
  - CPU, memory, and disk I/O tracking
  - Data throughput visualization
- Alerts and Notifications
  - Failure notifications
  - Performance alerts

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- SQL Server with SSIS
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Alex-carmona/etl-monitor-dashboard.git
   ```

2. Install dependencies:
   ```bash
   cd etl-monitor-dashboard
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
export interface ETLPackage {
  id: number;
  name: string;
  status: 'running' | 'succeeded' | 'failed' | 'pending';
  startTime: string;
  endTime?: string;
  duration?: string;
  error?: string;
}

export interface ResourceMetrics {
  timestamp: string;
  cpu: number;
  memory: number;
  diskIO: number;
  throughput: number;
}

export interface Alert {
  id: number;
  type: 'error' | 'warning' | 'info';
  message: string;
  timestamp: string;
  packageId?: number;
}
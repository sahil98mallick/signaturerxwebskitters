
export interface Bounds {
    south: number;
    west: number;
    north: number;
    east: number;
}

export interface MapEventsProps {
    updateBounds: () => void;
}
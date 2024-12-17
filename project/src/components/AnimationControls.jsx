import React from 'react'
import { Play, Pause, FastForward, Rewind } from 'lucide-react';

function AnimationControls({ state, onPlay, onPause, onSpeedChange }) {
    return (
        <div className="absolute bottom-4 left-4 flex gap-2 bg-white rounded-lg shadow-lg p-2">
            
            <button
                onClick={state.isPlaying ? onPause : onPlay}
                className="p-2 hover:bg-gray-100 rounded-lg"
                title={state.isPlaying ? "Pause" : "Play"}
            >
                {state.isPlaying ? (
                    <Pause className="w-5 h-5 text-gray-600" />
                ) : (
                    <Play className="w-5 h-5 text-gray-600" />
                )}
            </button>


            <div className="flex items-center gap-2 ml-2">
                <button
                    onClick={() => onSpeedChange(Math.max(0.5, state.speed - 0.5))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    disabled={state.speed <= 0.5}
                >
                    <Rewind className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-sm text-gray-600">{state.speed}x</span>
                <button
                    onClick={() => onSpeedChange(Math.min(2, state.speed + 0.5))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    disabled={state.speed >= 2}
                >
                    <FastForward className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="flex items-center ml-2 px-2 text-sm text-gray-600">
                {state.currentPhase === 'forward' ? 'Forward Pass' :
                    state.currentPhase === 'backward' ? 'Backward Pass' :
                        'Ready'}
            </div>

            <div className="flex items-center px-2 text-sm text-gray-600">
                Iteration: {state.iteration}
            </div>
        </div>
    )
}

export default AnimationControls

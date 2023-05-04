(function() {
    'use strict';

    // Mutation Observer API
    global.MutationObserver = class {
        observe() {}
        disconnect() {}
        takeRecords() {
            return [];
        }
    };

    // Intersection Observer API
    global.IntersectionObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() {
            return [];
        }
    };

    // Web Audio API
    global.AudioContext = class {};
    global.OfflineAudioContext = class {};
    global.AudioBufferSourceNode = class {};
    global.ConstantSourceNode = class {};
    global.MediaElementAudioSourceNode = class {};
    global.MediaStreamAudioSourceNode = class {};
    global.MediaStreamTrackAudioSourceNode = class {};
    global.OscillatorNode = class {};
    global.MediaStreamAudioDestinationNode = class {};
    global.AnalyserNode = class {};
    global.BiquadFilterNode = class {};
    global.ChannelMergerNode = class {};
    global.ChannelSplitterNode = class {};
    global.ConvolverNode = class {};
    global.DelayNode = class {};
    global.DynamicsCompressorNode = class {};
    global.GainNode = class {};
    global.IIRFilterNode = class {};
    global.PannerNode = class {};
    global.ScriptProcessorNode = class {};
    global.StereoPannerNode = class {};
    global.WaveShaperNode = class {};
    global.AudioWorkletNode = class {};
})();

(ns fireworks-cljs.fireworks
	(:require [clojure.string :as string]))

(def canvas-width 800)
(def canvas-height 500)

(def firework (atom {}))
(def fireworks (atom ()))

(def gravity 0.04)
(def number-of-fireworks 10)
(def number-of-particles-per-firework 25)
(def min-y-speed 2)
(def max-y-speed 6)
(def diff-y-speed (- max-y-speed min-y-speed)) 
(def max-x-speed 4)
(def max-explosion-speed 8)
(def mid-explosion-speed (* -1 (/ max-explosion-speed 2)))

(defn hsv-to-rgb [h s v]
  (map #(int (* 255 %)) ; Syntactic sugar for fn [x] (* 255 x)
	  (let [u (int (/ h 60.0))
	        f (- (/ h 60.0) u)
	        p (* v (- 1 s))
	        q (* v (- 1 (* s f)))
	        t (* v (- 1 (* s (- 1 f))))]
	        (condp = u
	           0 (list v t q)
	           1 (list q v p) 
	           2 (list p v t)
	           3 (list p q v) 
	           4 (list t p v) 
	           5 (list v p q)
	        )
        )
    )
)

(defn audio []
  (let [audio-context (new js/AudioContext)
  		req (new js/XMLHttpRequest)
  		]
  		()
  	)
)

(defn create-particle [x y x-speed y-speed]
  {:x x :y y :x-speed x-speed :y-speed y-speed}
)

(defn move-particle [particle]
  (assoc particle 
  	:x (+ (:x particle) (:x-speed particle)) 
  	:y (+ (:y particle) (:y-speed particle))
  	:y-speed (+ (:y-speed particle) gravity) 
  )
)

(defn explode-particle [particle]
  (assoc particle 
  	:x (+ (:x particle) (:x-speed particle)) 
  	:y (+ (:y particle) (:y-speed particle))
  	:x-speed (+ mid-explosion-speed (* (rand) max-explosion-speed)) 
  	:y-speed (+ mid-explosion-speed (* (rand) max-explosion-speed)) 
  )
)

(defn create-firework [firework]
  (let [x (* (rand) canvas-width)
  	    y canvas-height
  	    x-speed (+ -2 (* (rand) max-x-speed))
  	    y-speed (* -1 (+ min-y-speed (* (rand) diff-y-speed)))]
  	    (assoc firework 
  	    :particles (map (fn [_] (create-particle x y x-speed y-speed)) (range number-of-particles-per-firework))
  	  	:exploded false
  	  	:alpha 1.0
  	  	:color (hsv-to-rgb (* (rand) 360) 0.5 0.95)
  	    )
  )
)

(defn reset-firework [firework]
  (if (and (true? (:exploded firework)) (> 0.0 (:alpha firework)))
  		(create-firework {})
  		(assoc firework :reset false)
  	)
)

(defn move-firework [firework]
	(if (and (< 1 (:y-speed (first (:particles firework)))) (false? (:exploded firework)))
	  ;; if true
 	  (assoc firework 
	   :particles (map (fn [p] (explode-particle p)) (:particles firework))
	   :exploded true
	  )
	  ;; false
 	  (assoc firework 
	   :particles (map (fn [p] (move-particle p)) (:particles firework))
	   :alpha (if (false? (:exploded firework)) (:alpha firework) (- (:alpha firework) 0.009))
	  )
	)
)

(defn render-firework [context firework]
  (doseq [particle (:particles firework)]
    (def le (string/join "," (:color firework)))
    (def pe (str "rgba(" (string/join "," (:color firework)) "," (:alpha firework) ")"))
    (set! (.-fillStyle context) (str "rgba(" (string/join "," (:color firework)) "," (:alpha firework) ")"))
    (.beginPath context)
    (.arc context (:x particle) (:y particle) 2 0 (* 2 Math/PI) true)
    (.closePath context)
	(.fill context)
  )
)

(defn create-fireworks [_]
  (map (fn [_] (create-firework {})) (range number-of-fireworks))
)

(defn reset-fireworks [fireworks]
  (map (fn [firework] (reset-firework firework)) fireworks)
)

(defn move-fireworks [fireworks]
  (map (fn [firework] (move-firework firework)) fireworks)
)

(defn render-fireworks [context fireworks]
  (doseq [firework fireworks]
    (render-firework context firework)
  )
)

(defn render []
  (let [canvas (.getElementById js/document "surface")]
    (let [context (.getContext canvas "2d")]
      (set! (.-fillStyle context) (str "rgba(" 0 "," 0 "," 0 "," 0.1 ")"))
      (.fillRect context 0 0 canvas-width canvas-height)
      (render-fireworks context @fireworks)
    )
  )
)

(def request-animation-frame
  (or (.-mozRequestAnimationFrame js/window)
      (.-requestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      #(js/timeout 10 (%)) ; Syntactic sugar for a fn
  )
)
       
(defn animate []
  (request-animation-frame animate)
  (render)
  (swap! fireworks move-fireworks)
  (swap! fireworks reset-fireworks)
)

(defn init []
  (.write js/document "ClojureScript fireworks by Mathias Olsson")
  (.write js/document "<div><canvas id='surface'/></div>")
  (let [canvas (.getElementById js/document "surface")]
    (set! (.-width canvas) canvas-width)
    (set! (.-height canvas) canvas-height)
  )
  (swap! fireworks create-fireworks)
  (animate)
)
  
(set! (.-onload js/window) init)

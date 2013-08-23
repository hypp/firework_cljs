(defproject fireworks-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]]
  
  :plugins [
  			;; lein-cljsbuild plugin to build a CLJS project
  			[lein-cljsbuild "0.3.2"]
			]
            
  ;; cljsbuild options configuration
  :cljsbuild {:builds
              {
               :dev
               {;; clojurescript source code path
                :source-paths ["src/brepl" "src/cljs"]

                ;; Google Closure Compiler options
                :compiler {;; the name of emitted JS script file
                           :output-to "resources/public/js/fireworks.js"

                           ;; minimum optimization
                           :optimizations :advanced

                           ;; prettyfying emitted JS
                           :pretty-print true}
                }
            }
        }
  )

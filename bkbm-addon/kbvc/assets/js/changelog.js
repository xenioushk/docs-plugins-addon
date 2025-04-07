$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
      "Removed:": "<b>❌ Removed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Plugin translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }
  // Change only the version and date
  var metaData = ["1.1.8", "07/04/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, April, 04 - v 1.1.8", ["Updated: Plugin composer version and dependency manager code."]],
    ["2025, March, 29 - v 1.1.7", ["Updated: Plugin admin ajax function."]],
    ["2025, March, 20 - v 1.1.6", ["Updated: Plugin composer version."]],
    ["2025, March, 16 - v 1.1.5", ["Updated: Plugin meta info class.", "Updated: Addon shortcodes.", "Fixed: WPB shortcode javascript file loading issue.", "Fixed: Animation class bug.", "Added: plugin dependency constants and methods.", "Fixed: vc_add_shortcode_param dependency bug.", "Fixed: dependency checkpoint bugs.", "Fixed: Update notifier bug.", "Removed: Extra codes from the plugin.", "Updated: Plugin translation file.", "Removed: WPBakery elements empty description tag."]],
  ]
  generateDynamicLog(changeLogData)
})

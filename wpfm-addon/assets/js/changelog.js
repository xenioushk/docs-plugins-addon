$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:/gi, function (matched) {
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
  var metaData = ["1.1.9", "08/12/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2024, December, 08 - v 1.1.9", ["Updated: Plugin for WordPress 6.7.1", "Updated: Plugin for WooCommerce 9.4.3"]],
    ["2024, July 22 - v 1.1.8", ["Updated: Plugin for WooCommerce 9.1.2"]],
    ["2023, December 10 - v 1.1.7", ["Updated: Plugin for WooCommerce 8.3.1", "Fixed: Product details page auto scrolling issue.", "Updated: Plugin language/translation file."]],
    ["2023, October 05 - v 1.1.6", ["Updated: Plugin translation file", "Updated: Plugin styles and javascripts."]],
  ]
  generateDynamicLog(changeLogData)
})
